const app = Vue.createApp({
    data() {
        return {
            contents: [], // 컨텐츠 목록
            currentPage: 1, // 현재 페이지
            perPage: 9, // 한 페이지에 표시할 컨텐츠 수
            searchTerm: '', // 검색어
            selectedCategory: '', // 선택된 카테고리
            categories: ['News','Blog'],
            viewMore: null,
            showMore: false,
            newPost: {
                category: '',
                title: '',
                date: '',
                moreContent: {
                    h1: '',
                    h2: '',
                    p: ''
                },
                img: ''
            },
        };
    },
    computed: {
        displayedContents() { // 표시할 컨텐츠
            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            return this.contents.slice(start, end);
        },
        randomContents() {
            // contents 배열을 무작위로 정렬합니다.
            let shuffledContents = this.contents.sort(() => Math.random() - 0.5);
        
            // 무작위로 정렬된 배열에서 처음 3개의 컨텐츠를 반환합니다.
            return shuffledContents.slice(0, 3);
        },
        recentContents() {
            let sortedContents = this.contents.sort((a, b) => {
              return new Date(b.date) - new Date(a.date);
            });
            return sortedContents.slice(0, 3);
        },
        totalPage() { // 전체 페이지 수
            return Math.ceil(this.contents.length / this.perPage);
        },
        noResults() { // 검색 결과가 없는지 여부
            return !this.contents.length;
        }
    },
    created() { // 입력값의 변화로 실행되는 methods의 search함수를 페이지로드시에 바로 실행시킬수 있다.
        this.search();
    },    
    methods: {
        search() { // 검색 기능
            axios.get('../json/db.json') // 실제 API 경로로 변경
                .then(response => {
                    if (!this.searchTerm && !this.selectedCategory) {
                        this.contents = response.data.posts;
                    }
                    else {
                        // filter는 true인것을 추출
                        this.contents = response.data.filter(content =>
                // a||b a,b둘중하나가 true면 true반환 카테고리하고 검색란이 선택안됐을때 true  
                // 만약 검색한게 히트한게 없다면 false이므로 필터링결과가 0이되고 noresult가 true
                            (!this.selectedCategory || content.category === this.selectedCategory) &&
                            (!this.searchTerm || content.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
                        );
                    }
                    this.currentPage = 1; // 검색 후 첫 페이지로 이동
                })
                .catch(console.error);
        },
        goToPage(page) {
            this.currentPage = page;
        },
        prevPage() { // 이전 페이지로 이동
            if (this.currentPage > 1) this.currentPage--;
        },
        nextPage() { // 다음 페이지로 이동
            if (this.currentPage < this.totalPage) this.currentPage++;
        },
        goToFirstPage() {
            this.currentPage = 1;
        },
        goToLastPage() {
            this.currentPage = this.totalPage;
        },
        hiddenHeader() {
            const header = document.querySelector(".header");
            header.classList.add('hidden-header');
        },
        showHeader() {
            const header = document.querySelector(".header");
            header.classList.remove('hidden-header')
        },
        createPost() {
            // 현재 시간을 YYYY-MM-DD 형식으로 가져오기
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하기 때문에 1을 더해야 합니다.
            const day = String(now.getDate()).padStart(2, '0');
            const date = `${year}-${month}-${day}`;
            console.log(this.newPost);
            // 새로운 포스트를 생성
            axios.post('http://localhost:3000/posts', { ...this.newPost, date: date }) // 실제 API 경로로 변경
                .then(response => {
                    // 포스트가 성공적으로 생성되면, contents 배열에 추가
                    this.contents.push(response.data);
                    // 새로운 포스트를 초기화
                    this.newPost = {
                        category: '',
                        title: '',
                        date: '',
                        moreContent: {
                            h1: '',
                            h2: '',
                            p: ''
                        },
                        img: ''
                    };
                })
                .catch(console.error);
        }
    }
});

app.mount('#app');
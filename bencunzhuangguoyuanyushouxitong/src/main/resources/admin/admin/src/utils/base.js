const base = {
    get() {
        return {
            url : "http://localhost:8080/bencunzhuangguoyuanyushouxitong/",
            name: "bencunzhuangguoyuanyushouxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/bencunzhuangguoyuanyushouxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "本庄村果园预售系统"
        } 
    }
}
export default base

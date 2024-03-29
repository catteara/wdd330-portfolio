var comments = [];

export default class Comments {
    constructor(type) {
        this.type = type;
    }
    addComment(hikeName, content) {
        comments = this.readCommentList('comments');
        comments.push({
            name: hikeName,
            date: new Date(),
            content: comment
        });
        this.writeCommentList();
    }
    getAllComments() {
        return this.readCommentList('comments');
    }
    showCommentsList() {
        console.log('show comments list');
    }
    writeCommentList() {
        const data = JSON.stringify(comments);
        localStorage.setItem('comments', data);
    }
    readCommentList() {
        const data = JSON.parse(localStorage.getItem('comments'));
        return data;
    }
}
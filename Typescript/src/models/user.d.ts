export interface User {
    id: string;
    name: string;
    surname: string;
    age: number;
    email: string;
}

type newUser = Omit<User, 'id'>;

interface Article {
    author: User;
    body: string;
    created: Date;
    comments: string[];
}

type UserWithArticles = User & {articles: Article[]}
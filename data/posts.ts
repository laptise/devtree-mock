export class Post {
  constructor(public title: string, public likes: number, public comments: Comment[]) {}
}

export class Comment {
  constructor(public author: string, public content: string) {}
}

export const posts = [
  new Post("Node.js 환경 구축하기", 4, [new Comment("kim", "별론데요?"), new Comment("lee", "별론데요?")]),
  new Post("Docker에서 Python구축", 6, [new Comment("kim", "좀 이상해요")]),
  new Post("Docker에서 Django구축", 2, [new Comment("kim", "와 좋다")]),
  new Post("회사에서 몰래 블로그 갱신하는법", 1, [new Comment("kim", "개꿀")]),
  new Post("Oracle 퍼포먼스 올리기", 8, []),
  new Post("클라우드 서비스 3사 비교", 17, []),
];

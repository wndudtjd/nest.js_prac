export interface Board {
    id: string;
    title: string;
    description: string;
    status: BoardStatus;
}

// enumoration: 지정된 값만 나오게끔 하기
export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}
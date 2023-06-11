import { Injectable } from '@nestjs/common';
import { Board } from './boards.model';

@Injectable()
export class BoardsService {
    // private을 사용한 이유
    // 다른 컴포넌트에서 boards라는 배열값을 수정하지 못하게 하려고 private을 사용함
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }
}
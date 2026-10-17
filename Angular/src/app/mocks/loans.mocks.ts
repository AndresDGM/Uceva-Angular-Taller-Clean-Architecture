import { Loan } from "../core/domain/models/loan.model";

export const LOANS_MOCK: Loan[] = [
    {
        id: 1,
        bookId: 1,
        userId: 1,
        loanDate: '2025-01-10',
        returnDate: '2025-01-20',
        status: 'ACTIVE',
    },
    {
        id: 2,
        bookId: 2,
        userId: 2,
        loanDate: '2025-02-05',
        returnDate: '2025-02-15',
        status: 'RETURNED',
    },
    {
        id: 3,
        bookId: 3,
        userId: 3,
        loanDate: '2025-03-01',
        returnDate: '2025-03-10',
        status: 'OVERDUE',
    }
];

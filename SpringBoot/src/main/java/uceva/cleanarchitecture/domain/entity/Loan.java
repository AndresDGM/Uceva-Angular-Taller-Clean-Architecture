package uceva.cleanarchitecture.domain.entity;

public class Loan {
    public Integer id;
    public Integer bookId;
    public Integer userId;
    public String loanDate;
    public String returnDate;
    public String status;

    public Loan(Integer id, Integer bookId, Integer userId, String loanDate, String returnDate, String status){
        this.id = id;
        this.bookId = bookId;
        this.userId = userId;
        this.loanDate = loanDate;
        this.returnDate = returnDate;
        this.status = status;
    }

}

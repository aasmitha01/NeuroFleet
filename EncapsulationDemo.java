class BankAccount {

    // Private data (hidden)
    private String accountHolder;
    private double balance;

    // Setter for account holder
    public void setAccountHolder(String name) {
        accountHolder = name;
    }

    // Getter for account holder
    public String getAccountHolder() {
        return accountHolder;
    }

    // Setter for balance with validation
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        } else {
            System.out.println("Invalid deposit amount");
        }
    }

    // Withdraw method with security
    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Insufficient balance");
        }
    }

    // Getter for balance
    public double getBalance() {
        return balance;
    }
}

// -------- MAIN CLASS --------
public class EncapsulationDemo {
    public static void main(String[] args) {

        BankAccount acc = new BankAccount();

        acc.setAccountHolder("Aasmitha");
        acc.deposit(5000);
        acc.withdraw(1500);

        System.out.println("Account Holder: " + acc.getAccountHolder());
        System.out.println("Remaining Balance: " + acc.getBalance());
    }
}

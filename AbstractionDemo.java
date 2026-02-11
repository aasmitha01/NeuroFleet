// -------- ABSTRACT CLASS --------
abstract class Payment {
    abstract void pay();   // abstract method

    void receipt() {       // normal method
        System.out.println("Payment receipt generated");
    }
}

// -------- CHILD CLASS 1 --------
class UPI extends Payment {
    @Override
    void pay() {
        System.out.println("Paid using UPI");
    }
}

// -------- CHILD CLASS 2 --------
class Card extends Payment {
    @Override
    void pay() {
        System.out.println("Paid using Card");
    }
}

// -------- MAIN CLASS --------
public class AbstractionDemo {
    public static void main(String[] args) {

        Payment p1 = new UPI();
        Payment p2 = new Card();

        p1.pay();
        p2.pay();
        p1.receipt();
    }
}

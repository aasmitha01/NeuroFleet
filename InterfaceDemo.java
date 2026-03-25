// -------- INTERFACE --------
interface Payment {
    void pay();   // abstract by default
}

// -------- CLASS 1 --------
class UPI implements Payment {
    @Override
    public void pay() {
        System.out.println("Payment through UPI");
    }
}

// -------- CLASS 2 --------
class Card implements Payment {
    @Override
    public void pay() {
        System.out.println("Payment through Card");
    }
}

// -------- MAIN CLASS --------
public class InterfaceDemo {
    public static void main(String[] args) {

        Payment p1 = new UPI();
        Payment p2 = new Card();

        p1.pay();
        p2.pay();
    }
}

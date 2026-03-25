// -------- PARENT CLASS --------
class Vehicle {
    String brand = "Toyota";

    void start() {
        System.out.println("Vehicle is starting...");
    }
}

// -------- CHILD CLASS --------
class Car extends Vehicle {
    void display() {
        System.out.println("Brand: " + brand);
    }
}

// -------- MAIN CLASS --------
public class InheritanceDemo {
    public static void main(String[] args) {

        Car c = new Car();

        c.start();    // inherited method
        c.display();  // own method
    }
}

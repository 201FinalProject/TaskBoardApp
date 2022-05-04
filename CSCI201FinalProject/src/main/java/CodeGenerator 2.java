import java.security.SecureRandom;

public class CodeGenerator{
    public static void main(String[] args) {
        SecureRandom random = new SecureRandom();
        int num = random.nextInt(0x1000000);
        String formatted = String.format("%06x", num); 
        System.out.println(formatted.toUpperCase());
    }
}
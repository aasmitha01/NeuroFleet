public class StringCompression {
    public static void main(String[] args) {
        String s = "aaabbccccd";
        System.out.println(compress(s));
    }

    static String compress(String s) {
        StringBuilder sb = new StringBuilder();
        int count = 1;

        for (int i = 1; i <= s.length(); i++) {
            if (i < s.length() && s.charAt(i) == s.charAt(i - 1)) {
                count++;
            } else {
                sb.append(s.charAt(i - 1)).append(count);
                count = 1;
            }
        }
        return sb.toString();
    }
}

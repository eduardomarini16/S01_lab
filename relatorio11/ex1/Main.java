public class Main {
    public static void main(String[] args) {
        // Morador morador = new Morador("Morador comum");
        // Essa linha não compila porque Morador é uma classe abstrata.

        Morador mago = new Mago("Howl", "transformação");
        Morador demonio = new DemonioDoFogo("Calcifer");

        mago.apresentar();
        demonio.apresentar();
    }
}

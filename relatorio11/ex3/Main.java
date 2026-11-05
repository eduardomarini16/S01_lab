public class Main {
    public static void main(String[] args) {
        Alienigena alienigena = new Alienigena("Serpo");
        EspiritoYoukai espirito = new EspiritoYoukai("Turbo Granny");

        MapaDeAvistamentos mapa = new MapaDeAvistamentos();
        mapa.registrar("Escola", alienigena);
        mapa.registrar("Túnel", espirito);

        mapa.investigar("Escola");
        mapa.investigar("Túnel");
        mapa.investigar("Parque");
    }
}

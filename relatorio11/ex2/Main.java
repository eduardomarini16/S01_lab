public class Main {
    public static void main(String[] args) {
        ItemDoCardapio cafe = new ItemDoCardapio("Café coado", 8.00);
        ItemDoCardapio curry = new ItemDoCardapio("Curry da casa", 25.00);
        ComboLeblanc combo = new ComboLeblanc("Combo café e curry", 30.00);

        CafeLeblanc leblanc = new CafeLeblanc();
        leblanc.adicionar(cafe);
        leblanc.adicionar(curry);
        leblanc.adicionar(combo);

        leblanc.mostrarCardapio();
    }
}

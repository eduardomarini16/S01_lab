public class Main {
    public static void main(String[] args) {
        // Os monstros são criados antes do cozinheiro e depois adicionados à sua lista.
        // Isso é agregação: os monstros existem independentemente do cozinheiro.
        Slime slime = new Slime("Slime azul");
        Mandragora mandragora = new Mandragora("Mandrágora vermelha");

        Cozinheiro cozinheiro = new Cozinheiro("Senshi", "ferro");
        cozinheiro.adicionarIngrediente(slime);
        cozinheiro.adicionarIngrediente(mandragora);

        // A panela é criada dentro do construtor do cozinheiro e pertence a ele.
        // Isso é composição: a panela faz parte do cozinheiro neste programa.
        cozinheiro.servirBanquete();
    }
}

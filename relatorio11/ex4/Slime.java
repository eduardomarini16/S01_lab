public class Slime extends Monstro {

    public Slime(String nome) {
        super(nome);
    }

    @Override
    public String receita() {
        return "cozinhar em fogo baixo até engrossar";
    }
}

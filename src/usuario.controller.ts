import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./Usuario.repository";

@Controller('/usuarios')
export class UsuarioController{

    private usuarioRepository = new UsuarioRepository();

    @Post()
    async criarUsuario(@Body() dadosDoUsuario){
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    }
    @Get()
    async listaUsuarios(){
        return this.usuarioRepository.listar();

    }

}
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    public function api()
    {
        $dados = file_get_contents("php://input");

        $dados = json_decode($dados);

        // $nome = \filter_var($dados->nome);
        $email = \filter_var($dados->email);
        $senha = \filter_var($dados->senha);

        $users = DB::table('users')->where(["email" => $email == 'email', 'senha' => $senha == "senha"])->get();

        if ($users) {
            return \json_encode(\true);
        } else {
            return \json_encode(\false);
            // $us = DB::table('users')->insert(['email' => $email, 'senha' => $senha]);
        }
    }

    public function get()
    {
        $get = DB::table('users')->get();

        print_r(json_encode($get));
    }

    public function insert()
    {
        $dados = file_get_contents("php://input");

        $dados = json_decode($dados);


        // $dados->nome = \filter_var($dados->nome);
        // $nome = \filter_var($dados->nome);
        $email = \filter_var($dados->email);
        $senha = \filter_var($dados->senha);

        $users = DB::table('users')->select('email', 'senha')->where('email', '=',  $email)->where('senha', '=',  $senha)->get();

        if (!$users) {
            echo \json_encode(false);
            $insert = DB::table('users')->insert(['email' => $email, 'senha' => $senha]);
        } else {
            echo \json_encode(true);
        }
    }
    public function delete($id)
    {
        $delete = DB::table('users')->where('id', $id)->delete();
    }
    public function update($id)
    {
        $dados = file_get_contents("php://input");

        $dados = json_decode($dados);

        // $dados->nome = \filter_var($dados->nome);
        // $nome = \filter_var($dados->nome);
        $email = \filter_var($dados->email);
        $senha = \filter_var($dados->senha);
        if ($email and $senha) {
            $update = DB::table('users')->where('id', $id)->update(['email' => $email, 'senha' => $senha]);
        }
    }
}

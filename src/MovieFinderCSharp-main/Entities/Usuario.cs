﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace moviefinder.Entities;

[Table("Usuarios")]
public class Usuario
{
    [Key]
    public int Id { get; set; }

    public string Nome { get; set; }

    public string Email { get; set; }

    public string Senha { get; set; }

    public int Idade { get; set; }

    public string Genero { get; set; }
    
}
    


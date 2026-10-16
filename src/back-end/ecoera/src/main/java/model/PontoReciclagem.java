package com.ecoera.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "pontos_reciclagem")
public class PontoReciclagem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String endereco;

    private String cidade;
    private String estado;
    private String cep;
    private String telefone;
    private String horarioFuncionamento;
    private String latitude;
    private String longitude;
    private String descricao;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "ponto_material",
            joinColumns = @JoinColumn(name = "ponto_id"),
            inverseJoinColumns = @JoinColumn(name = "material_id")
    )
    private List<com.ecoera.model.TipoMaterial> materiais;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getEndereco() { return endereco; }
    public void setEndereco(String endereco) { this.endereco = endereco; }
    public String getCidade() { return cidade; }
    public void setCidade(String cidade) { this.cidade = cidade; }
    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
    public String getCep() { return cep; }
    public void setCep(String cep) { this.cep = cep; }
    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }
    public String getHorarioFuncionamento() { return horarioFuncionamento; }
    public void setHorarioFuncionamento(String horarioFuncionamento) { this.horarioFuncionamento = horarioFuncionamento; }
    public String getLatitude() { return latitude; }
    public void setLatitude(String latitude) { this.latitude = latitude; }
    public String getLongitude() { return longitude; }
    public void setLongitude(String longitude) { this.longitude = longitude; }
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    public List<com.ecoera.model.TipoMaterial> getMateriais() { return materiais; }
    public void setMateriais(List<com.ecoera.model.TipoMaterial> materiais) { this.materiais = materiais; }
}

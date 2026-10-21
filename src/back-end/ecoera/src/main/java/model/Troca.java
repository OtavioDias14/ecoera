package model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "trocas")
public class Troca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomePessoa;

    private String contato;

    private String descricao;

    private String itemDesejado;

    @ManyToOne
    @JoinColumn(name = "material_id")
    private TipoMaterial material;

    private Double quantidade;

    @ManyToOne
    @JoinColumn(name = "ponto_id")
    private PontoReciclagem ponto;

    private String status;

    private LocalDate dataTroca;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNomePessoa() { return nomePessoa; }
    public void setNomePessoa(String nomePessoa) { this.nomePessoa = nomePessoa; }

    public String getContato() { return contato; }
    public void setContato(String contato) { this.contato = contato; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public String getItemDesejado() { return itemDesejado; }
    public void setItemDesejado(String itemDesejado) { this.itemDesejado = itemDesejado; }

    public TipoMaterial getMaterial() { return material; }
    public void setMaterial(TipoMaterial material) { this.material = material; }

    public Double getQuantidade() { return quantidade; }
    public void setQuantidade(Double quantidade) { this.quantidade = quantidade; }

    public PontoReciclagem getPonto() { return ponto; }
    public void setPonto(PontoReciclagem ponto) { this.ponto = ponto; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDate getDataTroca() { return dataTroca; }
    public void setDataTroca(LocalDate dataTroca) { this.dataTroca = dataTroca; }
}

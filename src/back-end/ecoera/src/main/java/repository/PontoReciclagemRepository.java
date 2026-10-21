package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import model.PontoReciclagem;

import java.util.List;

@Repository
public interface PontoReciclagemRepository extends JpaRepository<PontoReciclagem, Long> {
    List<PontoReciclagem> findByCidade(String cidade);
    List<PontoReciclagem> findByNomeContainingIgnoreCase(String nome);
    PontoReciclagem save(PontoReciclagem ponto);
}
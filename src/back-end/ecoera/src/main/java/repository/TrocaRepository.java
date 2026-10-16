package com.ecoera.repository;

import com.ecoera.model.Troca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrocaRepository extends JpaRepository<Troca, Long> {
    List<Troca> findByStatus(String status);
}
package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import model.TipoMaterial;

@Repository
public interface TipoMaterialRepository extends JpaRepository<TipoMaterial, Long> {

    TipoMaterial save(TipoMaterial material);
}

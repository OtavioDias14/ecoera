package com.itb.in2em.ecoera.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itb.in2em.ecoera.model.entity.troca;
import com.itb.in2em.ecoera.model.services.trocaService;

// A seguir annotation do (Spring Web MVC) dependência: "spring-boot-starter-webmvc" (pom.xml)

// Annotation de classe

// @Controller: Sistema Web ( Sites em geral) - Back-End + Front-End
// @RestController: Api (apenas api´s) - Apenas Back-End

// Annotation de métodos

// @GetMapping:  Utilizado para "buscar" dados na API (Somente pesquisa)
// @PostMapping: Utilizado para "enviar" dados para API (Cadastros)
// @PutMapping:  Utilizado para "atualizar" todos os dados na API
// @DeleteMapping: Utilizado para "excluir" dados na API
// @PatchMapping: Utilizado para "atualizar parcialmente" dados na API, exemplo: mudar o status de um troca

// ResponseEntity: Controla a resposta HTTP completa de uma API, permitindo definir o corpo (body), o código de status (200, 201, 400 etc.)
//                 e os cabeçalhos (headers)


@RestController
@RequestMapping("/api/v1/trocas")
@CrossOrigin(origins = "*") // Permite requisições do React
public class TrocaController {

  // Ligação com o service

  private trocaService trocaService = new trocaService();


  // Listando todos os trocas

  @GetMapping
  public ResponseEntity  <List<troca>> findAll() {
    return   ResponseEntity.ok(trocaService.listarTodos());
  }
  
  // Buscar troca pelo Id

  // Utilize "?" ou "Object" quando o retorno pode ser objetos diferentes

  @GetMapping("/{id}")
  public ResponseEntity<?> findById(@PathVariable String id) {
     try {
      Long idLong = Long.parseLong(id);
      troca troca = trocaService.buscarPorId(idLong);
      if(troca == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("troca como o id " + id + " não encontrado.");
      }
        return ResponseEntity.ok(troca);
     } catch (Exception e) {
         return ResponseEntity.status(HttpStatus.BAD_REQUEST).body( id + " inválido, utilize um valor numérico.");
     }
    
  }

  // Salvar troca

  @PostMapping
  public ResponseEntity<troca> save(@RequestBody troca troca) {
    return ResponseEntity.status(HttpStatus.CREATED).body(trocaService.salvar(troca));
  }

  // Atualizar todos os dados do troca

  @PutMapping("/{id}")
  public ResponseEntity<?> update (@PathVariable String id, @RequestBody troca troca) {

   try {
      Long idLong = Long.parseLong(id);
      troca trocaBanco = trocaService.buscarPorId(idLong);
      if(trocaBanco == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("troca como o id " + id + " não encontrado.");
      }
    
      troca trocaAtualizado = trocaService.atualizar(idLong, troca);
      return ResponseEntity.ok(trocaAtualizado);
   } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body( id + " inválido, utilize um valor numérico.");
   }

  }
  // Excluir troca

  @DeleteMapping("/{id}")
  public ResponseEntity<?> delete(@PathVariable String id) {
   try {

       Long idLong = Long.parseLong(id);
       troca trocaBanco = trocaService.buscarPorId(idLong);
       if(trocaBanco == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("troca como o id " + id + " não encontrado.");
      }
      boolean excluido = trocaService.excluir(idLong);
      if (excluido) {
        return ResponseEntity.ok("troca com o id " + id + " excluído com sucesso.");
      } else {
        return ResponseEntity.ok("Não foi possível excluir o troca com o id " + id);
      }
       
     } catch (Exception e) {
       return ResponseEntity.status(HttpStatus.BAD_REQUEST).body( id + " inválido, utilize um valor numérico.");
    }
  }


}

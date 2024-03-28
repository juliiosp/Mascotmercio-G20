package es.upm.dit.isst.mascotmercio.controllers;

import org.springframework.stereotype.Controller; //Para creación de controladores REST
import org.springframework.web.bind.annotation.GetMapping;

//Ver Service/DueñoMascota.java para entender mejor la estructura

@RestController
@RequestMapping("/dueñomascota")
public class DueñoMascotaController {

    @Autowired
    private DueñoMascotaService dueñoMascotaservice;

    @GetMapping("/{id}") //Solicitud GET (obtener información) mediante id para identificar al usuario
    public ResponseEntity<DuenoMascota> getDueñoMascotaById(@PathVariable Integer id){
        DuenoMascota aux = dueñoMascotaservice.getDueñoMascotaById(id);//creamos objeto auxiliar
        return ResponseEntity.ok(aux); // Comprueba si estado HTTP es con éxito y devuelve el dueño de mascota
    }

    @PostMapping
    public ResponseEntity<DuenoMascota> createDueñoMascota(@PathVariable DueñoMascota dueñomascota){ // Crea un nuevo objeto
        DuenoMascota aux = dueñoMascotaservice.createDueñoMascota(dueñomascota); //creamos objeto auxiliar
        return ResponseEntity.status(HttpStatus.CREATED).body(aux); //devuelve la espuesta de creacion de objeto
    }

    @PutMapping("/{id}")
    public ResponseEntity<DuenoMascota> updateDueñoMascota(@PathVariable DueñoMascota dueñomascota){
        DuenoMascota aux = dueñoMascotaservice.updateDueñoMascota(dueñomascota);
        return ResponseEntity.ok(aux);//Igual que GET
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDueñoMascota(@PathVariable Integer id){ // Borramos objeto pasando id como parametro
        DueñoMascotaService.deleteDueñoMascota(id);
        return ResponseEntity.noContent().build();
    }        
}
@Service
public class DueñoMascotaService{

    @Autowired
    private DueñoMascotaRepository dueñomascotaRepository;

    public DueñoMascota createDueñoMascota(DuenoMascota dueñomascota){ //Se pasa dueñomascota como parámetro con la info correspondiente
        return dueñomascotaRepository.save(dueñomascota); //Se almacena en la BBDD y devuelve el objeto
    }

    public DueñoMascota getDueñoMascotaById(Integer id){ //Pasamos id como parametro
        if(dueñomascotaRepository.findById(id).isPresent()){ //Comprueba si existe el objeto con el id indicado
            return (dueñomascotaRepository.findById(id)).get(); // Si existe lo devuelve
        }
        else{
            throw new DueñoMascotaNotFoundException("Usuario no encontrado") //No existe, lanza escepcion
        }
    }

    public DueñoMascota updateDueñoMascota(DueñoMascota dueñomascota){ //Igual que create
        return dueñomascotaRepository.save(dueñomascota)
    }

    public void deleteDueñoMascota(Integer id){
        dueñomascotaRepository.deleteById(id) // Borramos objeto con el id pasado como parametro
    }
}
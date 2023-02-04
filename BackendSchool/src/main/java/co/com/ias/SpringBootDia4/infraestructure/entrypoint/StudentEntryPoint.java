package co.com.ias.SpringBootDia4.infraestructure.entrypoint;

import co.com.ias.SpringBootDia4.domain.model.student.dto.StudentDTO;
import co.com.ias.SpringBootDia4.domain.usecase.StudentUseCase;
import co.com.ias.SpringBootDia4.infraestructure.adapters.jpa.exceptions.StudentNotFoundException;
import co.com.ias.SpringBootDia4.infraestructure.adapters.jpa.exceptions.SubjectNotFoundException;
import co.com.ias.SpringBootDia4.infraestructure.entrypoint.utility.ResponseHandler;
import lombok.AllArgsConstructor;
import org.hibernate.PropertyValueException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student/")
@AllArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StudentEntryPoint {

    private StudentUseCase studentUseCase;

    @PostMapping("/new")
    public ResponseEntity<?> saveStudent(@RequestBody StudentDTO studentDTO) {
        try {
            studentUseCase.saveStudent(studentDTO);
            return ResponseHandler.generateResponse(String.format("Se ha almacenado correctamente el estudiante %s en la base de datos en la materia con ID %d",studentDTO.getName(),studentDTO.getIdSubject()), HttpStatus.CREATED);
        }catch (IllegalArgumentException e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }catch (StudentNotFoundException e){
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }catch (HttpMessageNotReadableException e){
            return ResponseHandler.generateResponse("Ingrese unicamente argumentos numéricos en el ID", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/")
    public ResponseEntity<?> getAllStudents(){
        try{
            return ResponseHandler.generateResponse(studentUseCase.getStudents(),HttpStatus.OK,String.format("En la base de datos se encuentran en total %d elementos",studentUseCase.getStudents().size()));
        }
        catch (Exception e){
            return ResponseHandler.generateResponse("Ha habido un problema al intentar acceder a la base de datos",HttpStatus.BAD_REQUEST);
        }

    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateStudent(@RequestBody StudentDTO studentDTO,@PathVariable Long id){
        try{
            StudentDTO student = studentUseCase.updateStudent(studentDTO,id);
            return ResponseHandler.generateResponse(String.format("Se ha modificado el estudiante %s correctamente", student.getName()),HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (StudentNotFoundException e) {
            return ResponseHandler.generateResponse(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable Long id){
        try{
            studentUseCase.deleteStudent(id);
            return ResponseHandler.generateResponse(String.format("Se ha eliminado correctamente el estudiante con ID %d",id),HttpStatus.OK);
        }catch(StudentNotFoundException e){
            return ResponseHandler.generateResponse(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/subject/{id}")
    public ResponseEntity<?> studentBySubjectId(@PathVariable Long id){
        try {
            List<StudentDTO> studentList = studentUseCase.getStudentsBySubjectId(id);
            if(studentList==null){
                return new ResponseEntity<>("[]",HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(studentList,HttpStatus.CREATED);

        }catch (Exception e){
            return new ResponseEntity<>("No se ha encontrado ninguna materia con ese ID",HttpStatus.PRECONDITION_FAILED);
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getStudentById(@PathVariable Long id){
        try{
            return new ResponseEntity<>(studentUseCase.getStudentById(id),HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>("No hay ningún estudiante asociado con el ID",HttpStatus.BAD_REQUEST);
        }
    }
}

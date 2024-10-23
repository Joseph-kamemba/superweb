package SuperWeb.Create.Users;

import jakarta.validation.constraints.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
public class UsersService {

    @Autowired
    private final UsersRepository usersRepository;

    List<UsersModel> fetchAllUsers(){
        return usersRepository.findAll();
    }

    UsersModel fetchById(Long id){
        return usersRepository.findById(id).get();
    }

    public UsersService(UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }
    public UsersModel createUser(UsersController.AddUserRequest addUserRequest) {
        UsersModel usersModel = new UsersModel(
                addUserRequest.name(),
                addUserRequest.email(),
                addUserRequest.phoneNumber(),
                addUserRequest.subject(),
                addUserRequest.message());
        return usersRepository.save(usersModel);
    }


}

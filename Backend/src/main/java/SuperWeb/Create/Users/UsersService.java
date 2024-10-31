package SuperWeb.Create.Users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.util.List;



@Service
public class UsersService {

    @Autowired
    private final UsersRepository usersRepository;

    List<UsersModel> fetchAllUsers(){
        return usersRepository.findAll();
    }


    public UsersService(UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }

    public UsersModel createUser(UsersController.AddUserRequest addUserRequest) {
        UsersModel usersModel = new UsersModel(
                addUserRequest.name(),
                addUserRequest.email(),
                addUserRequest.password(),
                addUserRequest.phoneNumber(),
                addUserRequest.subject(),
                addUserRequest.message());
        return usersRepository.save(usersModel);


    }
}

package SuperWeb.Create.Users;

import SuperWeb.Create.product.ProductModel;
import SuperWeb.Create.product.ProductService;
import lombok.Getter;
import lombok.Setter;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(maxAge = 3360)
@RestController
@RequestMapping("/api/v1/")
public class UsersController {
    private final UsersService usersService;

    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @PostMapping("createUsers")
public ResponseEntity<UsersModel> createUser(@RequestBody AddUserRequest user) {
        UsersModel savedUser = usersService.createUser(user);
        return ResponseEntity.ok(savedUser);
    }

    public record AddUserRequest(String name,
                                 String email,
                                 String phoneNumber,
                                 String subject,
                                 String message){}
}


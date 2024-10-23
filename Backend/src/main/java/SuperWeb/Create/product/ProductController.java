package SuperWeb.Create.product;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
@CrossOrigin
@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("api/v1/products")
    public ResponseEntity<List<ProductModel>> fetchAllProducts(){
        return ResponseEntity.ok(productService.fetchAllProducts());
    }

    @PostMapping(value = "create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ProductModel> createProduct(@RequestParam String title,
                                                      @RequestParam String description,
                                                      @RequestParam("file") MultipartFile file){

        ProductRequest product = new ProductRequest(title, description);
            return ResponseEntity.ok(productService.createProduct(product, file));
    }

    @PutMapping("api/v1/products/{id}")
    public ResponseEntity<ProductModel> updateProduct(@PathVariable("id") Long id, @RequestBody ProductRequest product){
        return ResponseEntity.ok(productService.updateProduct(id, product));
    }

    @DeleteMapping("api/v1/products/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long id){
        ProductModel prodObj=productService.fetchById(id);
        String deleteMsg=null;
        if(prodObj!=null){
            deleteMsg=productService.deleteProduct(prodObj);
        }
        return ResponseEntity.ok(deleteMsg);
    }

public record ProductRequest(String title,
         String description){}

}

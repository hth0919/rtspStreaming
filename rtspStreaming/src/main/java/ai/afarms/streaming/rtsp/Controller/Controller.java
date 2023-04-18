/*
 * @author ⓒAFarms liberator 
 * mail : liberator@kakao.com
 * phone : 010-8323-5634
*/
package ai.afarms.streaming.rtsp.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.stereotype.Controller
public class Controller {
	@GetMapping("/")
	public String index() {
		String path = System.getProperty("user.dir");
	    System.out.println("Working Directory = " + path);
		return "index";
	}
}

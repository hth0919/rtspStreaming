/*
 * @author ⓒAFarms liberator 
 * mail : liberator@kakao.com
 * phone : 010-8323-5634
*/
package ai.afarms.streaming.rtsp.Configure;

import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class MvcConfiguration implements WebMvcConfigurer {
	@Override
	public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/assets/**",
        		"/resources/**")
            .addResourceLocations("classpath:/static/assets/",
            		"classpath:/static/resources/");
	}
}

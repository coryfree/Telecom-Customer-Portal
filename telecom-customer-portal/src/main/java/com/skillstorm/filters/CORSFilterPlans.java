package com.skillstorm.filters;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;

@WebFilter(urlPatterns = "/plans")
public class CORSFilterPlans implements Filter{

	@Override
	public void destroy() {
		System.out.println("Filter destroyed");
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// intercepted a request
		HttpServletResponse resp = (HttpServletResponse) response;
		resp.addHeader("Access-Control-Allow-Origin", "*"); // don't use * in production
		chain.doFilter(request, resp); // forward the req/resp on the servlet that was called
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		System.out.println("Filter created");
	}
	
}
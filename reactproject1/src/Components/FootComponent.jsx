const FootComponent = ({ footerRef }) => {
  return (
      <footer id="footer_container" class="foot" ref={footerRef}>
          <span>&copy; 2026 Jacob Thomas</span>
          <span className="foot-links flex items-center gap-x-7">
              <a
                  href="https://github.com/jakethomas1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-x-2
               text-[13px] font-['Source_Code_Pro'] font-[500]
               tracking-[.14em] uppercase
               text-white/90 hover:text-[rgb(255,99,71)]
               no-underline transition-colors duration-300"
              >
                  {/* icon stack — both icons occupy the same cell */}
                  <span className="relative inline-grid place-items-center w-[15px] h-[15px]">
                      {/* brand icon — visible at rest, spins out on hover */}
                      <svg
                          className="col-start-1 row-start-1 w-[15px] h-[15px] fill-current
                   transition-all duration-500 ease-out
                   group-hover:opacity-0 group-hover:rotate-[90deg] group-hover:scale-50"
                          viewBox="0 0 24 24"
                      >
                          <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z" />
                      </svg>

                      {/* arrow icon — hidden at rest, spins in on hover */}
                      <svg
                          className="col-start-1 row-start-1 w-[15px] h-[15px]
                   opacity-0 -rotate-[90deg] scale-50
                   group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100
                   transition-all duration-500 ease-out"
                          viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"
                      >
                          <path d="M4 12L12 4M12 4H5M12 4V11" />
                      </svg>
                  </span>

                  GitHub
              </a>
              <a
                  href="https://linkedin.com/in/jakethomas1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-x-2
        text-[13px] font-['Source_Code_Pro'] font-[500]
        tracking-[.14em] uppercase
        text-white/90 hover:text-[rgb(255,99,71)]
        no-underline transition-colors duration-300"
              >
                  <span className="relative inline-grid place-items-center w-[15px] h-[15px]">
                      <svg
                          className="col-start-1 row-start-1 w-[15px] h-[15px] fill-current
                transition-all duration-500 ease-out
                group-hover:opacity-0 group-hover:rotate-[90deg] group-hover:scale-50"
                          viewBox="0 0 24 24"
                      >
                          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>

                      <svg
                          className="col-start-1 row-start-1 w-[15px] h-[15px]
                opacity-0 -rotate-[90deg] scale-50
                group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100
                transition-all duration-500 ease-out"
                          viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"
                      >
                          <path d="M4 12L12 4M12 4H5M12 4V11" />
                      </svg>
                  </span>

                  LinkedIn
              </a>
          </span>
      </footer>
  );
}

export default FootComponent;
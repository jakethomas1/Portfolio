const SectionHeaderComponent = ({header_text}) => {

  return (
      <div id="section_header_component" className="[@media(min-width:1049px)]:mx-auto mx-[40px] flex justify-center"> { /* Demonstration of using proper structure instead of calc(100%-80px) or something hacky */}
          <div className="min-w-[316px] w-full h-auto border-[white] pb-[4px] border-b-[0px] text-left w-fullmd:max-w-[751px] 
                                    [@media(min-width:1049px)]:max-w-[1032px] [@media(min-width:1581px)]:max-w-[1564px]">
              <span className="montserr block pl-[8px] text-[44px] font-[700]">{header_text}</span>
          </div>
      </div>
  );
}

export default SectionHeaderComponent;
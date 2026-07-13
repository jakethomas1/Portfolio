import SectionHeaderComponent from './SectionHeaderComponent';
import ProgCircleComponent from './ProgCircleComponent';

const ProgressTrackerComponent = () => {
    return (
        <div id="progresstracker_view">
            <SectionHeaderComponent header_text="In Progress" />
            <div id="progress_cont"
                className="flex md:flex-row flex-col gap-12 mx-12 my-12 justify-center items-center">
                <ProgCircleComponent radius={100} progress={.75} title="Security+ Exam" textsize="text-xl"/>
                <ProgCircleComponent radius={100} progress={.5} title="Joey Donuts Site" textsize="text-xl" />
                <ProgCircleComponent radius={100} progress={.14} title="Croyer Data" textsize="text-xl" />
            </div>
        </div>
    );
}

export default ProgressTrackerComponent;


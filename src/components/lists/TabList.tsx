'use client';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { ExperienceType } from '@/lib/types';
import { getBreakpointsWidth, getId } from '@/lib/utils/helper';

import { Link, ListItem } from '@/components';

import { useState } from 'react';

type Props = {
  experiences: ExperienceType[];
};

const TabList = ({ experiences }: Props) => {
  const [activeCompany, setActiveCompany] = useState(0);
  const windowWidth = useWindowWidth();

  const currentCompany = experiences[activeCompany];
  const sm = getBreakpointsWidth('sm');

  const sliderStyle =
    windowWidth <= sm
      ? {
          left: `calc(${activeCompany} * 120px)`,
        }
      : {
          top: `calc(${activeCompany} * 2.5rem)`,
        };

  return (
    <div className="flex flex-col sm:flex-row text-sm md:text-base gap-6 md:gap-10 min-h-[250px]">
      {/* Sidebar for Companies */}
      <div className="font-mono text-xs sm:text-sm relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[180px]">
        {experiences.map(({ company }, i) => (
          <button
            key={getId()}
            className={`h-10 min-w-[120px] sm:w-auto sm:px-5 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ${
              i === activeCompany ? 'text-accent' : ''
            }`}
            onClick={() => setActiveCompany(i)}
          >
            {company}
          </button>
        ))}

        {/* Slider */}
        <div className="absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3"></div>
        <div
          style={sliderStyle}
          className="absolute h-0.5 w-[120px] sm:w-0.5 sm:h-10 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll"
        ></div>
      </div>

      {/* Roles and Tasks Section */}
      <div key={getId()} className="p-1 space-y-10">
        {currentCompany.roles.map((roleData) => (
          <div key={getId()} className="space-y-5">
            {/* Current Role Information */}
            <div className="space-y-1">
              <h3 className="text-lg font-medium capitalize text-dark-2">
                {roleData.role}{' '}
                <Link href={currentCompany.companyUrl} target="_blank" className="text-accent">
                  @{currentCompany.company}
                </Link>
              </h3>
              <p className="font-mono text-xs capitalize">
                {roleData.started.toString()} - {roleData.upto.toString()}
              </p>
            </div>

            {/* Tasks List with "Show More" functionality */}
            <TasksList tasks={roleData.tasks} />
          </div>
        ))}
      </div>
    </div>
  );
};

const TasksList = ({ tasks }: { tasks: string[] }) => {
  const [showMore, setShowMore] = useState(false);
  const displayedTasks = showMore ? tasks : tasks.slice(0, 2);

  return (
    <div>
      <ul className="space-y-2">
        {displayedTasks.map((task, index) => (
          <ListItem key={getId()}>{task}</ListItem>
        ))}
      </ul>
      {tasks.length > 3 && (
        <button
          className="mt-3 text-sm text-accent float-right"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Less' : 'More'}
        </button>
      )}
    </div>
  );
};

export default TabList;
import React from "react";
import ProgressBars from "../components/progressBar-example/progress-bars";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";

function ProgressBar() {
  const progressBar = `
    import React from 'react';

    import ProgressBar from '@neoKit/progress-bar';

    const ProgressBarDefaultExample = () => {
    return <ProgressBar value={30} />;
    };

    export default ProgressBarDefaultExample;`;
  const progressBarIntermediate = `
    import React from 'react';

    import ProgressBar from '@neoKit/progress-bar';

    const ProgressBarDefaultExample = () => {
    return <ProgressBar isIndeterminate />;
    };

    export default ProgressBarDefaultExample;`;

  return (
    <div className='flex flex-col  w-full flex-start'>
      <PageData
        title='Progress bar'
        description='A progress bar displays the status of a given process.'
      />

      {/* Default */}
      <section>
        <PageData
          subTitle='Default'
          subDescription='Determinate progress bars fill the container from 0 to 100%. This reflects the progress of the process.'
        />
        <div className='py-2'>
          <ProgressBars value='30' color='red'></ProgressBars>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={progressBar} />
        </div>
      </section>

      {/* Indeterminate */}
      <section>
        <PageData
          subTitle='Indeterminate'
          subDescription='Indeterminate progress bars display movement along the container until the process is finished.'
        />
        <div className='py-2'>
          <ProgressBars isIndeterminate></ProgressBars>
        </div>
        <div className='w-full pt-3'>
          <Snipet code={progressBarIntermediate} />
        </div>
      </section>
    </div>
  );
}

export default ProgressBar;

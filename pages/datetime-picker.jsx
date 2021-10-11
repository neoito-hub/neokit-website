import React, { useState, forwardRef } from "react";
import DatetimePicker from "../components/datetime-picker-example/datetime-picker";
import PageData from "../components/page-data/page-data";
import Snipet from "../components/snippet/snipet";
import Buttons from "../components/button-example/buttons";

const DatetimePickerExample = () => {
  const DatePickerDefault = `
    import React from "react";
    import DateTimePicker from '@neoKit/datetime-picker';
    
    const DatePickerDefault = () => {
        const [startDate, setStartDate] = useState(new Date());
      return (
        <DatetimePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
      );
    };
  
  export default DatePickerDefault;
  
      `;
      const DatePickerFormats = `
    import React from "react";
    import DateTimePicker from '@neoKit/datetime-picker';
    
    const DatePickerFormats = () => {
        const [startDate, setStartDate] = useState(new Date());
      return (
        <DatetimePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy/dd/MM"
      />
       
      );
    };
  
  export default DatePickerFormats;  `;

  const DatePickerDisabled = `
  import React from "react";
  import DateTimePicker from '@neoKit/datetime-picker';
  
  const DatePickerDisabled = () => {
      const [startDate, setStartDate] = useState(new Date());
    return (
        <DatetimePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        disabled
        placeholderText="This is disabled"
       />
    );
  };

export default DatePickerDisabled; `;
const DatePickerChildren = `
import React from "react";
import DateTimePicker from '@neoKit/datetime-picker';

const DatePickerChildren = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <DatetimePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    dateFormat="yyyy/dd/MM"
  >
    <div style={{ color: "red" }}>
      Don't forget to check the weather!
    </div>
  </DatetimePicker>
  );
};

export default DatePickerChildren; `;

const DatePickerClear = `
import React from "react";
import DateTimePicker from '@neoKit/datetime-picker';

const DatePickerClear = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <DatetimePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy/dd/MM"
            isClearable
            placeholderText="I have been cleared!"
          ></DatetimePicker>
  );
};

export default DatePickerClear; `;
const DatePickerCustomInput = `
import React from "react";
import DateTimePicker from '@neoKit/datetime-picker';

const DatePickerCustomInput = () => {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <Buttons appearance="primary" onClick={onClick} ref={ref}>
          {value}
        </Buttons>
  return (
    <DatetimePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />} ></DatetimePicker>
  );
};

export default DatePickerCustomInput; `;

const DatePickerwithTime = `
import React from "react";
import DateTimePicker from '@neoKit/datetime-picker';

const DatePickerwithTime = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <DatetimePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
          ></DatetimePicker>
  );
};

export default DatePickerwithTime; `;

const DatePickerTime = `
import React from "react";
import DateTimePicker from '@neoKit/datetime-picker';

const DatePickerTime = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <DatetimePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    showTimeSelect
    showTimeSelectOnly
    timeIntervals={15}
    timeCaption="Time"
    dateFormat="h:mm aa"
   ></DatetimePicker>
  );
};

export default DatePickerTime; `;



  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Buttons appearance="primary" onClick={onClick} ref={ref}>
      {value}
    </Buttons>
  ));

  return (
    <div className="flex flex-col  w-full flex-start">
      <PageData
        title="Date time picker"
        description="A date time picker allows the user to select an associated date and time."
      />
      {/* Default */}
      <section>
        <PageData
          subTitle="Default"
          subDescription="
          By default, selecting the date field opens the calendar view. The current date text is bold, underlined, and highlighted blue.
          The time field is used to select a time from the select menu."
        />
        <div className="py-2">
          <DatetimePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="w-full pt-3">
          <Snipet code={DatePickerDefault} />
        </div>
      </section>

      {/*  Disable datepicker
*/}
      <section>
        <PageData
          subTitle="Disable datepicker"
          subDescription='
          By default, User can disabled the datepicker'
        />
        <div className="py-2">
          <DatetimePicker
           selected={startDate}
           onChange={(date) => setStartDate(date)}
           disabled
           placeholderText="This is disabled"
          />
        </div>
        <div className="w-full pt-3">
          <Snipet code={DatePickerDisabled} />
        </div>
      </section>


      {/* Date Formats */}
      <section>
        <PageData
          subTitle="Date formats "
          subDescription='
          By default, selecting dates are "dd/mm/yy" format.but we can change the date formats.'
        />
        <div className="py-2">
          <DatetimePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy/dd/MM"
          />
        </div>
        <div className="w-full pt-3">
          <Snipet code={DatePickerFormats} />
        </div>
      </section>
      {/* Children */}
      <section>
        <PageData
          subTitle="Children"
          subDescription="User can pass messages to the component and that will displayed bottom of the calender"
        />
        <div className="py-2">
          <DatetimePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy/dd/MM"
          >
            <div style={{ color: "red" }}>
              Don't forget to check the weather!
            </div>
          </DatetimePicker>
        </div>
        <div className="w-full pt-3">
          <Snipet code={DatePickerChildren} />
        </div>
      </section>

      {/* Clear datepicker input
       */}
      <section>
        <PageData
          subTitle="Clear datepicker input
"
          subDescription="User can clear the exising data"
        />
        <div className="py-2">
          <DatetimePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy/dd/MM"
            isClearable
            placeholderText="I have been cleared!"
          ></DatetimePicker>
        </div>
        <div className="w-full pt-3">
          <Snipet code={DatePickerClear} />
        </div>
      </section>

      {/* Custom input
       */}
      <section>
        <PageData
          subTitle="Custom input
"
          subDescription="User pass a component instead of the  input field"
        />
        <div className="py-2">
          <DatetimePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
          ></DatetimePicker>
        </div>
        <div className="w-full pt-3">
          <Snipet code={DatePickerCustomInput} />
        </div>
      </section>
      {/*calender with time*/}
      <section>
        <PageData
          subTitle="Calender with time"
          subDescription="User can select time from the list "
        />
        <div className="py-2">
          <DatetimePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
          ></DatetimePicker>
        </div>
        <div className="w-full pt-3">
          <Snipet code={DatePickerwithTime} />
        </div>
      </section>
      {/* Select Time Only */}
      <section>
        <PageData
          subTitle="Select Time Only"
          subDescription="User can select only time "
        />
        <div className="py-2">
          <DatetimePicker
           selected={startDate}
           onChange={(date) => setStartDate(date)}
           showTimeSelect
           showTimeSelectOnly
           timeIntervals={15}
           timeCaption="Time"
           dateFormat="h:mm aa"
          ></DatetimePicker>
        </div>
        <div className="w-full pt-3">
          <Snipet code={DatePickerTime} />
        </div>
      </section>
    </div>
  );
};

export default DatetimePickerExample;

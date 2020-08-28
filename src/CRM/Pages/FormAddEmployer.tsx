import * as React from 'react';

import CSS from 'csstype';

import { Label } from 'office-ui-fabric-react/lib/Label';
import { TextField, ITextFieldStyles } from 'office-ui-fabric-react/lib/TextField';
import { CompoundButton } from 'office-ui-fabric-react';

import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { TestImages } from '@uifabric/example-data';
import { PrimaryButton } from '@fluentui/react';

import { useConstCallback } from '@uifabric/react-hooks';

import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { Calendar, DayOfWeek } from 'office-ui-fabric-react/lib/Calendar';
import { FocusTrapZone } from 'office-ui-fabric-react/lib/FocusTrapZone';
import { useBoolean } from '@uifabric/react-hooks';

const options: IChoiceGroupOption[] = [
  {
    key: '1',
    imageSrc: TestImages.choiceGroupBarSelected,
    imageAlt: 'Nam hình mô phỏng',
    selectedImageSrc: TestImages.choiceGroupBarUnselected,
    imageSize: { width: 32, height: 32 },
    text: 'Nam', // This text is long to show text wrapping.
  },
  {
    key: '0',
    imageSrc: TestImages.choiceGroupBarUnselected,
    imageAlt: 'Nữ hình mô phỏng',
    selectedImageSrc: TestImages.choiceGroupBarSelected,
    imageSize: { width: 32, height: 32 },
    text: 'Nữ',
  },
];

export const ChoiceGroupGender: React.FunctionComponent = () => {
  return <ChoiceGroup defaultSelectedKey="1" options={options} />;
};

const formStyle: CSS.Properties = {
  width: '500px',
  float: 'left',
  position: 'relative',
  padding: '0.5rem',
  marginLeft: '10px',
  fontFamily: 'sans-serif',
  fontSize: '1.5rem',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
};

const InputPhoneNumberStyle: Partial<ITextFieldStyles> = { fieldGroup: { width: 200 } };

const avatarEmployerStyle: CSS.Properties = {
  width: '485px',
  height: '500px',
  backgroundColor: 'gray',
  float: 'left',
  position: 'relative',
  padding: '0.5rem',
  fontFamily: 'sans-serif',
  fontSize: '1.5rem',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
};

const refreshFormInput: CSS.Properties = {
  marginTop: '10px',
  marginBottom: '37px'
};


const DayPickerStrings = {
  months: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  shortMonths: ['Th 1', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7', 'Th 8', 'Th 9', 'Th 10', 'Th 11', 'Th 12'],
  days: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
  shortDays: ['CN', 'H', 'B', 'T', 'N', 'S', 'B'],
  goToToday: 'Go to today',
  weekNumberFormatString: 'Số tuần {0}',
  prevMonthAriaLabel: 'Tháng trước',
  nextMonthAriaLabel: 'Tháng tiếp theo',
  prevYearAriaLabel: 'Năm ngoái',
  nextYearAriaLabel: 'Năm sau',
  prevYearRangeAriaLabel: 'Mười hai năm trước',
  nextYearRangeAriaLabel: 'Mười hai năm sau',
  closeButtonAriaLabel: 'Thoát',
};

export interface ICalendarButtonExampleProps {
  isDayPickerVisible?: boolean;
  isMonthPickerVisible?: boolean;
  highlightCurrentMonth?: boolean;
  highlightSelectedMonth?: boolean;
  buttonString?: string;
  showMonthPickerAsOverlay?: boolean;
  showGoToToday?: boolean;
}

let calendarButtonElement: HTMLElement;

export const FormAddEmployer: React.FunctionComponent<ICalendarButtonExampleProps> = (
  props: ICalendarButtonExampleProps,
) => {
  const [fullNameTextFieldValue, setFullNameTextFieldValue] = React.useState('');
  const onChangeFullNameTextFieldValue = useConstCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
      setFullNameTextFieldValue(newValue || '');
    },
  );

  const [addressTextFieldValue, setAddressTextFieldValue] = React.useState('');
  const onChangeAddressTextFieldValue = useConstCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
      setAddressTextFieldValue(newValue || '');
    },
  );

  const [phoneNumberTextFieldValue, setPhoneNumberTextFieldValue] = React.useState('');
  const onChangePhoneNumberTextFieldValue = useConstCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
      setPhoneNumberTextFieldValue(newValue || '');
    },
  );

  const addNewEmployer = () => {

    alert(
      'Họ tên: ' + fullNameTextFieldValue + 
      '\nNgày sinh: ' + selectedDate +
      '\nĐịa chỉ: ' + addressTextFieldValue +
      '\nSố điện thoại: ' + phoneNumberTextFieldValue
    );

  }

  const [showCalendar, { toggle: toggleShowCalendar }] = useBoolean(false);
  const [selectedDate, setSelectedDate] = React.useState<Date>();

  const {
    showMonthPickerAsOverlay = false,
    isDayPickerVisible = true,
    isMonthPickerVisible = true,
    showGoToToday = true,
    buttonString = 'Chọn ngày sinh',
    highlightCurrentMonth,
    highlightSelectedMonth
  } = props;
  const onSelectDate = (date: Date): void => {
    toggleShowCalendar();
    setSelectedDate(date); //giá trị value
  };

  return (
    <div>
      <div style={formStyle}>
        <div style={avatarEmployerStyle}></div>
        <PrimaryButton text="Thêm ảnh nhân viên" />
      </div>
      <div style={formStyle}>
          <Label>Họ tên:</Label>
          <TextField
            value={fullNameTextFieldValue}
            onChange={onChangeFullNameTextFieldValue}
          />

          <Label>Giới tính:</Label>
          <ChoiceGroupGender></ChoiceGroupGender>

          <Label>Ngày sinh:</Label>
          <div>
            <div ref={calendarBtn => (calendarButtonElement = calendarBtn!)}>
              <DefaultButton
                onClick={toggleShowCalendar}
                text={!selectedDate ? buttonString : selectedDate.toLocaleDateString()}
              />
            </div>
            {showCalendar && (
              <Callout
                isBeakVisible={false}
                className="ms-DatePicker-callout"
                gapSpace={0}
                doNotLayer={false}
                target={calendarButtonElement}
                directionalHint={DirectionalHint.bottomLeftEdge}
                onDismiss={toggleShowCalendar}
                setInitialFocus
              >
                <FocusTrapZone firstFocusableSelector="ms-DatePicker-day--today" isClickableOutsideFocusTrap>
                  <Calendar
                    // eslint-disable-next-line react/jsx-no-bind
                    onSelectDate={onSelectDate}
                    onDismiss={toggleShowCalendar}
                    isMonthPickerVisible={isMonthPickerVisible}
                    value={selectedDate!}
                    firstDayOfWeek={DayOfWeek.Sunday}
                    strings={DayPickerStrings}
                    isDayPickerVisible={isDayPickerVisible}
                    highlightCurrentMonth={highlightCurrentMonth}
                    highlightSelectedMonth={highlightSelectedMonth}
                    showMonthPickerAsOverlay={showMonthPickerAsOverlay}
                    showGoToToday={showGoToToday}
                  />
                </FocusTrapZone>
              </Callout>
            )}
        </div>

          <Label>Địa chỉ:</Label>
          <TextField
            value={addressTextFieldValue}
            onChange={onChangeAddressTextFieldValue}
          />

          <Label>Số điện thoại:</Label>
          <TextField 
            styles={InputPhoneNumberStyle}
            value={phoneNumberTextFieldValue}
            onChange={onChangePhoneNumberTextFieldValue}
          />
          <PrimaryButton text="Làm mới" style={refreshFormInput}/>
          <br/>
          <CompoundButton onClick={addNewEmployer} secondaryText="Thay đổi cơ sở dữ liệu">Thêm nhân viên</CompoundButton> &nbsp;
          <CompoundButton secondaryText="Xem nhân viên đã nhập">Kiểm tra</CompoundButton>
      </div>
      
    </div>
      
  );

}

export default FormAddEmployer;
import React, { useState, useEffect } from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import './HotelBookingTimeline.css'; // Створіть файл стилів для компонента

const HotelBookingTimeline = () => {
  const [groups, setGroups] = useState([
    { id: 1, title: 'Room 101' },
    { id: 2, title: 'Room 102' },
    { id: 3, title: 'Room 103' },
    { id: 4, title: 'Room 104' },
    { id: 5, title: 'Room 105' },
    { id: 6, title: 'Room 106' }
    // Add more rooms as needed
  ]);

  const [items, setItems] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(groups[0]?.id);

  useEffect(() => {
    // Оновлюємо поточний час кожну хвилину
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // кожні 60 секунд (можна змінити інтервал, якщо потрібно)

    return () => clearInterval(interval);
  }, []);

  const handleCanvasClick = (groupId, time, e) => {
    if (selectedStartDate && selectedEndDate) {
      const newBooking = {
        id: Math.random(),
        group: selectedRoom,
        title: 'New Booking',
        start_time: selectedStartDate,
        end_time: selectedEndDate,
      };

      setItems((prevItems) => [...prevItems, newBooking]);

      // Скидання обраних дат і кімнати після бронювання
      setSelectedStartDate(null);
      setSelectedEndDate(null);
      setSelectedRoom(groups[0]?.id);
    }
  };

  const handleStartDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    // Встановлюємо початок бронювання на 14:00 обраного дня
    selectedDate.setHours(14, 0, 0, 0);
    setSelectedStartDate(selectedDate);
  };

  const handleEndDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    // Встановлюємо кінець бронювання на 12:00 обраного дня
    selectedDate.setHours(12, 0, 0, 0);
    setSelectedEndDate(selectedDate);
  };

  const handleRoomChange = (e) => {
    setSelectedRoom(parseInt(e.target.value, 10));
  };

  const handleItemSelect = (itemId, e, time) => {
    // Отримання ID групи та часу події для бронювання
    const groupId = items.find((item) => item.id === itemId)?.group;
    const startTime = time;
    const endTime = new Date(time.getTime() + (selectedEndDate - selectedStartDate));

    // Додаємо подію бронювання
    const newBooking = {
      id: Math.random(),
      group: groupId,
      title: 'New Booking',
      start_time: startTime,
      end_time: endTime,
    };

    setItems((prevItems) => [...prevItems, newBooking]);

    // Скидання обраних дат і кімнати після бронювання
    setSelectedStartDate(null);
    setSelectedEndDate(null);
    setSelectedRoom(groups[0]?.id);
  };

  const handleItemMove = (itemId, dragTime, newGroupOrder) => {
    // Отримання бронювання, яке було переміщено
    const movedBooking = items.find((item) => item.id === itemId);
  
    // Визначення нового часу початку та групи для переміщеного бронювання
    const newStartTime = new Date(movedBooking.start_time.getTime() + (dragTime - movedBooking.start_time));
    const newEndTime = new Date(newStartTime.getTime() + (movedBooking.end_time - movedBooking.start_time));
    const newGroup = groups[newGroupOrder];
  
    // Оновлення часу та групи для переміщеного бронювання
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, start_time: newStartTime, end_time: newEndTime, group: newGroup.id } : item))
    );
  };
  

  return (
    <div>
      <div className="hotel-booking-timeline">
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={new Date()}
          defaultTimeEnd={new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)} // 7 days
          onCanvasClick={handleCanvasClick}
          onItemClick={handleItemSelect}
          onItemMove={handleItemMove}
        />
        <div className="current-time-indicator" style={{ left: `${calculateCurrentTimePosition()}px` }} />
      </div>
      <div className="booking-controls">
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={selectedStartDate ? selectedStartDate.toISOString().split('T')[0] : ''}
          onChange={handleStartDateChange}
        />

        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={selectedEndDate ? selectedEndDate.toISOString().split('T')[0] : ''}
          onChange={handleEndDateChange}
        />

        <label htmlFor="room">Room:</label>
        <select id="room" value={selectedRoom} onChange={handleRoomChange}>
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.title}
            </option>
          ))}
        </select>

        <button onClick={handleBookButtonClick}>Book</button>
      </div>
    </div>
  );

  function calculateCurrentTimePosition() {
    const timelineStart = new Date();
    const timelineEnd = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days

    const totalTimelineWidth = document.querySelector('.rct-scroll')?.offsetWidth || 0;
    const currentTimePosition = ((currentTime - timelineStart) / (timelineEnd - timelineStart)) * totalTimelineWidth;

    return currentTimePosition;
  }

  function handleBookButtonClick() {
    // Обробка бронювання за допомогою обраних дат та кімнати
    if (selectedStartDate && selectedEndDate && selectedRoom) {
      const groupId = groups.find((group) => group.id === selectedRoom)?.id;

      // Додаємо подію бронювання
      const newBooking = {
        id: Math.random(),
        group: groupId,
        title: 'New Booking',
        start_time: selectedStartDate,
        end_time: selectedEndDate,
      };

      setItems((prevItems) => [...prevItems, newBooking]);

      // Захоплення обраного діапазону дат та кімнати
      captureSelection(groupId, selectedStartDate, selectedEndDate);

      // Скидання обраних дат і кімнати після бронювання
      setSelectedStartDate(null);
      setSelectedEndDate(null);
      setSelectedRoom(groups[0]?.id);
    }
  }

  function captureSelection(groupId, startDate, endDate) {
    // Додаємо клас до вибраних комірок
    const selectedCells = document.querySelectorAll(
      `.rct-item.rct-item-resizable.rct-item-movable[data-group="${groupId}"]`
    );

    selectedCells.forEach((cell) => {
      const cellStart = new Date(parseInt(cell.getAttribute('data-start')));
      const cellEnd = new Date(parseInt(cell.getAttribute('data-end')));

      // Враховуємо час початку та закінчення бронювання (14:00 - 12:00)
      const adjustedStartDate = new Date(startDate);
      adjustedStartDate.setHours(14, 0, 0, 0);
      const adjustedEndDate = new Date(endDate);
      adjustedEndDate.setHours(12, 0, 0, 0);

      if (cellStart >= adjustedStartDate && cellEnd <= adjustedEndDate) {
        cell.classList.add('selected-booking');
      }
    });
  }
};

export default HotelBookingTimeline;

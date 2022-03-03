def students_in_instant(arrivals, departures, time_instant):
    return sum(
        arrival < time_instant < departure
        for arrival, departure in zip(arrivals, departures)
    )


print(students_in_instant([1, 2, 3], [3, 2, 7], 4))

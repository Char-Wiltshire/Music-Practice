from django.db import models

class PracticeSession(models.Model):
    INSTRUMENT_CHOICES = [
        ('guitar', 'Guitar'),
        ('piano', 'Piano'),
        ('violin', 'Violin'),
        ('flute', 'Flute'),
        ('drums', 'Drums'),
        ('other', 'Other'),
    ]

    instrument = models.CharField(max_length=100, choices=INSTRUMENT_CHOICES)
    duration = models.FloatField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.instrument} - {self.duration} hours on {self.date}"



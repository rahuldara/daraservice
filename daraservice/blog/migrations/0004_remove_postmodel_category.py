# Generated by Django 4.2.1 on 2023-06-30 14:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_postmodel_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='postmodel',
            name='category',
        ),
    ]

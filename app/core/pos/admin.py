from django.contrib import admin
from core.pos.models import Product, Sale, Box, Category, Client, DebtsPay, PaymentsCtaCollect, Devolution, SaleDetail
# Register your models here.
admin.site.register(Product)
admin.site.register(Sale)
admin.site.register(Box)

admin.site.register(Category)
admin.site.register(Client)
admin.site.register(DebtsPay)
admin.site.register(PaymentsCtaCollect)
admin.site.register(Devolution)
admin.site.register(SaleDetail)
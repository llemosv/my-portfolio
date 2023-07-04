'use client';

import { Divider } from '@/components/divider';
import { Form } from '@/components/forms';
import { SectionTitle } from '@/components/section-title';
import { FormProvider, useForm } from 'react-hook-form';
import { MdComputer } from 'react-icons/md';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/button';
import { motion } from 'framer-motion';
import { fadeUpAnimation, techBadgeAnimation } from '@/lib/animations';
import { EmailJSResponseStatus, send } from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useState } from 'react';

const sendEmailSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: 'O nome é obrigatório.',
    })
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ');
    }),
  email: z
    .string()
    .nonempty({
      message: 'O e-mail é obrigatório.',
    })
    .email({
      message: 'Formato de e-mail inválido',
    })
    .toLowerCase(),
  subject: z
    .string()
    .nonempty({
      message: 'O assunto é obrigatório.',
    })
    .min(1, { message: 'Informe um assunto válido.' })
    .max(50, { message: 'Informe um assunto válido.' })
    .toLowerCase(),
  message: z
    .string()
    .nonempty({
      message: 'A mensagem é obrigatória.',
    })
    .min(5, 'Informe no mínimo 5 caracteres.')
    .max(500, 'Informe no máximo 500 caracteres.')
    .toLowerCase(),
});

type SendEmailData = z.infer<typeof sendEmailSchema>;

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  const createUserForm = useForm<SendEmailData>({
    resolver: zodResolver(sendEmailSchema),
  });

  const { handleSubmit, reset } = createUserForm;

  const sendMail = async (data: SendEmailData) => {
    setLoading(true);
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };

    send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
    )
      .then(
        (response: EmailJSResponseStatus) => {
          toast.success('Email enviado com sucesso! 😁');
          reset();
        },
        (error: any) => {
          toast.error('Ocorreu um erro ao enviar o email! 😥');
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="container py-16">
      <SectionTitle subtitle="contact" title="Contato" icon={<MdComputer />} />
      <Divider className="mb-10" />
      <div className="flex flex-col gap-8 items-center w-full">
        <motion.h1
          className="font-mono font-medium text-2xl"
          {...techBadgeAnimation}
          transition={{ duration: 0.3, delay: 4 * 0.1 }}
        >
          Entre em contato comigo!
        </motion.h1>
        <FormProvider {...createUserForm}>
          <motion.form
            onSubmit={handleSubmit(sendMail)}
            className="flex flex-col gap-4 max-w-[420px] w-full"
            {...fadeUpAnimation}
            transition={{ duration: 0.3, delay: 4 * 0.1 }}
          >
            <Form.Field>
              <Form.Input type="name" name="name" placeholder="Nome" />
              <Form.ErrorMessage field="name" />
            </Form.Field>

            <Form.Field>
              <Form.Input type="email" name="email" placeholder="Email" />
              <Form.ErrorMessage field="email" />
            </Form.Field>

            <Form.Field>
              <Form.Input type="subject" name="subject" placeholder="Assunto" />
              <Form.ErrorMessage field="subject" />
            </Form.Field>

            <Form.Field>
              <Form.TextArea
                type="message"
                name="message"
                placeholder="Mensagem"
              />
              <Form.ErrorMessage field="message" />
            </Form.Field>

            <Button type="submit" loading={loading} className="w-full">
              Enviar
            </Button>
          </motion.form>
        </FormProvider>
      </div>
    </section>
  );
}
